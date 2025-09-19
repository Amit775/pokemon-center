import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeScalarWhereInput } from "../inputs/PokemonTypeScalarWhereInput";
import { PokemonTypeUpdateManyMutationInput } from "../inputs/PokemonTypeUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonTypeUpdateManyWithWhereWithoutTypeInput", {})
export class PokemonTypeUpdateManyWithWhereWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonTypeScalarWhereInput, {
    nullable: false
  })
  where!: PokemonTypeScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonTypeUpdateManyMutationInput;
}
