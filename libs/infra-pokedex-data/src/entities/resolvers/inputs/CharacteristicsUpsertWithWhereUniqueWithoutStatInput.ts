import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsCreateWithoutStatInput } from "../inputs/CharacteristicsCreateWithoutStatInput";
import { CharacteristicsUpdateWithoutStatInput } from "../inputs/CharacteristicsUpdateWithoutStatInput";
import { CharacteristicsWhereUniqueInput } from "../inputs/CharacteristicsWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicsUpsertWithWhereUniqueWithoutStatInput", {})
export class CharacteristicsUpsertWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => CharacteristicsWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CharacteristicsUpdateWithoutStatInput, {
    nullable: false
  })
  update!: CharacteristicsUpdateWithoutStatInput;

  @TypeGraphQL.Field(_type => CharacteristicsCreateWithoutStatInput, {
    nullable: false
  })
  create!: CharacteristicsCreateWithoutStatInput;
}
