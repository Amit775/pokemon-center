import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationCreateManyGenerationInputEnvelope } from "../inputs/PokemonFormGenerationCreateManyGenerationInputEnvelope";
import { PokemonFormGenerationCreateOrConnectWithoutGenerationInput } from "../inputs/PokemonFormGenerationCreateOrConnectWithoutGenerationInput";
import { PokemonFormGenerationCreateWithoutGenerationInput } from "../inputs/PokemonFormGenerationCreateWithoutGenerationInput";
import { PokemonFormGenerationWhereUniqueInput } from "../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationCreateNestedManyWithoutGenerationInput", {})
export class PokemonFormGenerationCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: PokemonFormGenerationCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormGenerationCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormGenerationCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormGenerationWhereUniqueInput[] | undefined;
}
