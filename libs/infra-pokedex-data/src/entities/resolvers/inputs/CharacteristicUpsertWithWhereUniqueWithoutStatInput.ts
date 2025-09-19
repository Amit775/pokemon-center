import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicCreateWithoutStatInput } from "../inputs/CharacteristicCreateWithoutStatInput";
import { CharacteristicUpdateWithoutStatInput } from "../inputs/CharacteristicUpdateWithoutStatInput";
import { CharacteristicWhereUniqueInput } from "../inputs/CharacteristicWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicUpsertWithWhereUniqueWithoutStatInput", {})
export class CharacteristicUpsertWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => CharacteristicWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicWhereUniqueInput;

  @TypeGraphQL.Field(_type => CharacteristicUpdateWithoutStatInput, {
    nullable: false
  })
  update!: CharacteristicUpdateWithoutStatInput;

  @TypeGraphQL.Field(_type => CharacteristicCreateWithoutStatInput, {
    nullable: false
  })
  create!: CharacteristicCreateWithoutStatInput;
}
