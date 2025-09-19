import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicCreateWithoutStatInput } from "../inputs/CharacteristicCreateWithoutStatInput";
import { CharacteristicWhereUniqueInput } from "../inputs/CharacteristicWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicCreateOrConnectWithoutStatInput", {})
export class CharacteristicCreateOrConnectWithoutStatInput {
  @TypeGraphQL.Field(_type => CharacteristicWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicWhereUniqueInput;

  @TypeGraphQL.Field(_type => CharacteristicCreateWithoutStatInput, {
    nullable: false
  })
  create!: CharacteristicCreateWithoutStatInput;
}
