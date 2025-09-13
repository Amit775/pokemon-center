import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyHeldItemInputEnvelope } from "../inputs/PokemonEvolutionCreateManyHeldItemInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutHeldItemInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutHeldItemInput";
import { PokemonEvolutionCreateWithoutHeldItemInput } from "../inputs/PokemonEvolutionCreateWithoutHeldItemInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutHeldItemInput", {})
export class PokemonEvolutionCreateNestedManyWithoutHeldItemInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutHeldItemInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutHeldItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutHeldItemInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutHeldItemInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyHeldItemInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyHeldItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
