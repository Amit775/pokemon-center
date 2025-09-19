import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyLocationInputEnvelope } from "../inputs/PokemonEvolutionCreateManyLocationInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutLocationInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutLocationInput";
import { PokemonEvolutionCreateWithoutLocationInput } from "../inputs/PokemonEvolutionCreateWithoutLocationInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutLocationInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutLocationInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutLocationNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutLocationInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyLocationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
