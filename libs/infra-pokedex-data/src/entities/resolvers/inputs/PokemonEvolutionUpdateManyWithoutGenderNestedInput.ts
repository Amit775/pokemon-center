import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyGenderInputEnvelope } from "../inputs/PokemonEvolutionCreateManyGenderInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutGenderInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutGenderInput";
import { PokemonEvolutionCreateWithoutGenderInput } from "../inputs/PokemonEvolutionCreateWithoutGenderInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutGenderInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutGenderInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutGenderNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutGenderNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutGenderInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutGenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutGenderInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutGenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyGenderInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyGenderInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutGenderInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutGenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
