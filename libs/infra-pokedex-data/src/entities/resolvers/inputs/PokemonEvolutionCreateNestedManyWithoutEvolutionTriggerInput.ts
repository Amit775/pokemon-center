import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope } from "../inputs/PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput";
import { PokemonEvolutionCreateWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionCreateWithoutEvolutionTriggerInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput", {})
export class PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutEvolutionTriggerInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutEvolutionTriggerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
