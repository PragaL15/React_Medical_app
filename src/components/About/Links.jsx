import * as React from 'react';
import { Link as ChakraLink, IconButton } from '@chakra-ui/react';

export const ExternalFooterLink = (props) => {
  const { href, text, isExternal = true } = props;

  return (
    <ChakraLink
      _focus={{ outline: 'none', boxShadow: 'none' }}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      fontWeight={500}
      color="gray.500"
      _hover={{ color: 'gray.600', textDecoration: 'none' }}
    >
      {text}
    </ChakraLink>
  );
};

export const InternalFooterLink = (props) => {
  const { href, text } = props;

  return (
    <a href={href}>
      <ChakraLink
        _focus={{ outline: 'none', boxShadow: 'none' }}
        as="span"
        fontWeight={500}
        color="gray.500"
        _hover={{ color: 'gray.600', textDecoration: 'none' }}
      >
        {text}
      </ChakraLink>
    </a>
  );
};

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

export const ExternalSocialLink = (props) => {
  const { href, label, icon, type, isExternal = true } = props;

  return (
    <IconButton
      as={ChakraLink}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      aria-label={label}
      icon={icon}
      colorScheme={type}
      {...iconProps}
    />
  );
};
