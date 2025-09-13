import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope } from "../inputs/PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput";
import { PokemonEvolutionCreateWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionCreateWithoutEvolutionTriggerInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutEvolutionTriggerInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutEvolutionTriggerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
