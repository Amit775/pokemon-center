import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateManyGenerationInputEnvelope } from "../inputs/AbilitiesCreateManyGenerationInputEnvelope";
import { AbilitiesCreateOrConnectWithoutGenerationInput } from "../inputs/AbilitiesCreateOrConnectWithoutGenerationInput";
import { AbilitiesCreateWithoutGenerationInput } from "../inputs/AbilitiesCreateWithoutGenerationInput";
import { AbilitiesScalarWhereInput } from "../inputs/AbilitiesScalarWhereInput";
import { AbilitiesUpdateManyWithWhereWithoutGenerationInput } from "../inputs/AbilitiesUpdateManyWithWhereWithoutGenerationInput";
import { AbilitiesUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/AbilitiesUpdateWithWhereUniqueWithoutGenerationInput";
import { AbilitiesUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/AbilitiesUpsertWithWhereUniqueWithoutGenerationInput";
import { AbilitiesWhereUniqueInput } from "../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("AbilitiesUpdateManyWithoutGenerationNestedInput", {})
export class AbilitiesUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [AbilitiesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: AbilitiesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: AbilitiesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: AbilitiesUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => AbilitiesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: AbilitiesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesWhereUniqueInput], {
    nullable: true
  })
  set?: AbilitiesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AbilitiesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesWhereUniqueInput], {
    nullable: true
  })
  delete?: AbilitiesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesWhereUniqueInput], {
    nullable: true
  })
  connect?: AbilitiesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: AbilitiesUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: AbilitiesUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AbilitiesScalarWhereInput[] | undefined;
}
