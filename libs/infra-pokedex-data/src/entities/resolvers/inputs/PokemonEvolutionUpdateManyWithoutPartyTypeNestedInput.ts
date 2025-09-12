import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyPartyTypeInputEnvelope } from "../inputs/PokemonEvolutionCreateManyPartyTypeInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutPartyTypeInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutPartyTypeInput";
import { PokemonEvolutionCreateWithoutPartyTypeInput } from "../inputs/PokemonEvolutionCreateWithoutPartyTypeInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutPartyTypeInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutPartyTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutPartyTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutPartyTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyPartyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyPartyTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
