import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeCreateManyPokemonFormInput } from "../inputs/PokemonFormTypeCreateManyPokemonFormInput";

@TypeGraphQL.InputType("PokemonFormTypeCreateManyPokemonFormInputEnvelope", {})
export class PokemonFormTypeCreateManyPokemonFormInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateManyPokemonFormInput], {
    nullable: false
  })
  data!: PokemonFormTypeCreateManyPokemonFormInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
