import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyHeldItemInput } from "../inputs/PokemonEvolutionCreateManyHeldItemInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyHeldItemInputEnvelope", {})
export class PokemonEvolutionCreateManyHeldItemInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyHeldItemInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyHeldItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
