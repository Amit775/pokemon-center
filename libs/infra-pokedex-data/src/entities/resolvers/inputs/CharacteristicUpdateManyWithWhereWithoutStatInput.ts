import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicScalarWhereInput } from "../inputs/CharacteristicScalarWhereInput";
import { CharacteristicUpdateManyMutationInput } from "../inputs/CharacteristicUpdateManyMutationInput";

@TypeGraphQL.InputType("CharacteristicUpdateManyWithWhereWithoutStatInput", {})
export class CharacteristicUpdateManyWithWhereWithoutStatInput {
  @TypeGraphQL.Field(_type => CharacteristicScalarWhereInput, {
    nullable: false
  })
  where!: CharacteristicScalarWhereInput;

  @TypeGraphQL.Field(_type => CharacteristicUpdateManyMutationInput, {
    nullable: false
  })
  data!: CharacteristicUpdateManyMutationInput;
}
