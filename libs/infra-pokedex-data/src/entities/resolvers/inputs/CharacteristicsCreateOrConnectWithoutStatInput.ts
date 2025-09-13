import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsCreateWithoutStatInput } from "../inputs/CharacteristicsCreateWithoutStatInput";
import { CharacteristicsWhereUniqueInput } from "../inputs/CharacteristicsWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicsCreateOrConnectWithoutStatInput", {})
export class CharacteristicsCreateOrConnectWithoutStatInput {
  @TypeGraphQL.Field(_type => CharacteristicsWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CharacteristicsCreateWithoutStatInput, {
    nullable: false
  })
  create!: CharacteristicsCreateWithoutStatInput;
}
