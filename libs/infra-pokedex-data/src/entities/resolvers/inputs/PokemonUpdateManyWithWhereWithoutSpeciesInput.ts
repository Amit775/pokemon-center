import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonScalarWhereInput } from "../inputs/PokemonScalarWhereInput";
import { PokemonUpdateManyMutationInput } from "../inputs/PokemonUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonUpdateManyWithWhereWithoutSpeciesInput", {})
export class PokemonUpdateManyWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonScalarWhereInput, {
    nullable: false
  })
  where!: PokemonScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonUpdateManyMutationInput;
}
