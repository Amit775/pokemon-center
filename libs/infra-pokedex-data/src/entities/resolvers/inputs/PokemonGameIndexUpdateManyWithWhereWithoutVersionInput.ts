import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexScalarWhereInput } from "../inputs/PokemonGameIndexScalarWhereInput";
import { PokemonGameIndexUpdateManyMutationInput } from "../inputs/PokemonGameIndexUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonGameIndexUpdateManyWithWhereWithoutVersionInput", {})
export class PokemonGameIndexUpdateManyWithWhereWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonGameIndexScalarWhereInput, {
    nullable: false
  })
  where!: PokemonGameIndexScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonGameIndexUpdateManyMutationInput;
}
