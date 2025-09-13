import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesScalarWhereInput } from "../inputs/PokemonGameIndicesScalarWhereInput";
import { PokemonGameIndicesUpdateManyMutationInput } from "../inputs/PokemonGameIndicesUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput", {})
export class PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonGameIndicesScalarWhereInput, {
    nullable: false
  })
  where!: PokemonGameIndicesScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonGameIndicesUpdateManyMutationInput;
}
