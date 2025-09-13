import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsScalarWhereInput } from "../inputs/CharacteristicsScalarWhereInput";
import { CharacteristicsUpdateManyMutationInput } from "../inputs/CharacteristicsUpdateManyMutationInput";

@TypeGraphQL.InputType("CharacteristicsUpdateManyWithWhereWithoutStatInput", {})
export class CharacteristicsUpdateManyWithWhereWithoutStatInput {
  @TypeGraphQL.Field(_type => CharacteristicsScalarWhereInput, {
    nullable: false
  })
  where!: CharacteristicsScalarWhereInput;

  @TypeGraphQL.Field(_type => CharacteristicsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CharacteristicsUpdateManyMutationInput;
}
