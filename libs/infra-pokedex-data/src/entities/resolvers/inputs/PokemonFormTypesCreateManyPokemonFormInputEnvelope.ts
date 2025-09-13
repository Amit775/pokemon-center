import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateManyPokemonFormInput } from "../inputs/PokemonFormTypesCreateManyPokemonFormInput";

@TypeGraphQL.InputType("PokemonFormTypesCreateManyPokemonFormInputEnvelope", {})
export class PokemonFormTypesCreateManyPokemonFormInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateManyPokemonFormInput], {
    nullable: false
  })
  data!: PokemonFormTypesCreateManyPokemonFormInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
