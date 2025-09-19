import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicWhereInput } from "../inputs/CharacteristicWhereInput";

@TypeGraphQL.InputType("CharacteristicListRelationFilter", {})
export class CharacteristicListRelationFilter {
  @TypeGraphQL.Field(_type => CharacteristicWhereInput, {
    nullable: true
  })
  every?: CharacteristicWhereInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicWhereInput, {
    nullable: true
  })
  some?: CharacteristicWhereInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicWhereInput, {
    nullable: true
  })
  none?: CharacteristicWhereInput | undefined;
}
