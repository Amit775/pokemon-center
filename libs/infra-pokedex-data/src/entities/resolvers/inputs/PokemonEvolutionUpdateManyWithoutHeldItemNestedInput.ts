import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyHeldItemInputEnvelope } from "../inputs/PokemonEvolutionCreateManyHeldItemInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutHeldItemInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutHeldItemInput";
import { PokemonEvolutionCreateWithoutHeldItemInput } from "../inputs/PokemonEvolutionCreateWithoutHeldItemInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutHeldItemNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutHeldItemNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutHeldItemInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutHeldItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutHeldItemInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutHeldItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyHeldItemInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyHeldItemInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
