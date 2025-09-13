import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsWhereInput } from "../inputs/CharacteristicsWhereInput";

@TypeGraphQL.InputType("CharacteristicsListRelationFilter", {})
export class CharacteristicsListRelationFilter {
  @TypeGraphQL.Field(_type => CharacteristicsWhereInput, {
    nullable: true
  })
  every?: CharacteristicsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsWhereInput, {
    nullable: true
  })
  some?: CharacteristicsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsWhereInput, {
    nullable: true
  })
  none?: CharacteristicsWhereInput | undefined;
}
