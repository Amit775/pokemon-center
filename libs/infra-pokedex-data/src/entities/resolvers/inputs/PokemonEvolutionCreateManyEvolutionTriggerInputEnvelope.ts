import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyEvolutionTriggerInput } from "../inputs/PokemonEvolutionCreateManyEvolutionTriggerInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope", {})
export class PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyEvolutionTriggerInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyEvolutionTriggerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
