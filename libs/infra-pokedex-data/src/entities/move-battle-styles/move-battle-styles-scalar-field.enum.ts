import { registerEnumType } from '@nestjs/graphql';

export enum MoveBattleStylesScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(MoveBattleStylesScalarFieldEnum, { name: 'MoveBattleStylesScalarFieldEnum', description: undefined })
