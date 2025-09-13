import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateManyGenerationInputEnvelope } from "../inputs/PokemonFormGenerationsCreateManyGenerationInputEnvelope";
import { PokemonFormGenerationsCreateOrConnectWithoutGenerationInput } from "../inputs/PokemonFormGenerationsCreateOrConnectWithoutGenerationInput";
import { PokemonFormGenerationsCreateWithoutGenerationInput } from "../inputs/PokemonFormGenerationsCreateWithoutGenerationInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsCreateNestedManyWithoutGenerationInput", {})
export class PokemonFormGenerationsCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: PokemonFormGenerationsCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormGenerationsCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormGenerationsCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormGenerationsWhereUniqueInput[] | undefined;
}
