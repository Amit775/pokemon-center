import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsUpdateWithoutStatInput } from "../inputs/CharacteristicsUpdateWithoutStatInput";
import { CharacteristicsWhereUniqueInput } from "../inputs/CharacteristicsWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicsUpdateWithWhereUniqueWithoutStatInput", {})
export class CharacteristicsUpdateWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => CharacteristicsWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CharacteristicsUpdateWithoutStatInput, {
    nullable: false
  })
  data!: CharacteristicsUpdateWithoutStatInput;
}
