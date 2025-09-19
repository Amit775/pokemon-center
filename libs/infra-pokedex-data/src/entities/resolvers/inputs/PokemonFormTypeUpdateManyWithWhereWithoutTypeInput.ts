import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeScalarWhereInput } from "../inputs/PokemonFormTypeScalarWhereInput";
import { PokemonFormTypeUpdateManyMutationInput } from "../inputs/PokemonFormTypeUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonFormTypeUpdateManyWithWhereWithoutTypeInput", {})
export class PokemonFormTypeUpdateManyWithWhereWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonFormTypeScalarWhereInput, {
    nullable: false
  })
  where!: PokemonFormTypeScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormTypeUpdateManyMutationInput;
}
