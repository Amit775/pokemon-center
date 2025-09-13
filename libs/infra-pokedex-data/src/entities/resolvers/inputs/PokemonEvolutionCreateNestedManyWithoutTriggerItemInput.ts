import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyTriggerItemInputEnvelope } from "../inputs/PokemonEvolutionCreateManyTriggerItemInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutTriggerItemInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutTriggerItemInput";
import { PokemonEvolutionCreateWithoutTriggerItemInput } from "../inputs/PokemonEvolutionCreateWithoutTriggerItemInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutTriggerItemInput", {})
export class PokemonEvolutionCreateNestedManyWithoutTriggerItemInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutTriggerItemInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutTriggerItemInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyTriggerItemInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyTriggerItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
