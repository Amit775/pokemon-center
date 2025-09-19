import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicUpdateWithoutStatInput } from "../inputs/CharacteristicUpdateWithoutStatInput";
import { CharacteristicWhereUniqueInput } from "../inputs/CharacteristicWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicUpdateWithWhereUniqueWithoutStatInput", {})
export class CharacteristicUpdateWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => CharacteristicWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicWhereUniqueInput;

  @TypeGraphQL.Field(_type => CharacteristicUpdateWithoutStatInput, {
    nullable: false
  })
  data!: CharacteristicUpdateWithoutStatInput;
}
