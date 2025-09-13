import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyTradeSpeciesInputEnvelope } from "../inputs/PokemonEvolutionCreateManyTradeSpeciesInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput";
import { PokemonEvolutionCreateWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutTradeSpeciesInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutTradeSpeciesInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutTradeSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyTradeSpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyTradeSpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
