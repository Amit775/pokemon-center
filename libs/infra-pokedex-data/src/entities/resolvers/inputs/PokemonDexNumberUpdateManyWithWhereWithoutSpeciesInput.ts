import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberScalarWhereInput } from "../inputs/PokemonDexNumberScalarWhereInput";
import { PokemonDexNumberUpdateManyMutationInput } from "../inputs/PokemonDexNumberUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonDexNumberUpdateManyWithWhereWithoutSpeciesInput", {})
export class PokemonDexNumberUpdateManyWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonDexNumberScalarWhereInput, {
    nullable: false
  })
  where!: PokemonDexNumberScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonDexNumberUpdateManyMutationInput;
}
