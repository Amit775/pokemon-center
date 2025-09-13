import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateManyIncreasedStatInputEnvelope } from "../inputs/NaturesCreateManyIncreasedStatInputEnvelope";
import { NaturesCreateOrConnectWithoutIncreasedStatInput } from "../inputs/NaturesCreateOrConnectWithoutIncreasedStatInput";
import { NaturesCreateWithoutIncreasedStatInput } from "../inputs/NaturesCreateWithoutIncreasedStatInput";
import { NaturesScalarWhereInput } from "../inputs/NaturesScalarWhereInput";
import { NaturesUpdateManyWithWhereWithoutIncreasedStatInput } from "../inputs/NaturesUpdateManyWithWhereWithoutIncreasedStatInput";
import { NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput } from "../inputs/NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput";
import { NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput } from "../inputs/NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpdateManyWithoutIncreasedStatNestedInput", {})
export class NaturesUpdateManyWithoutIncreasedStatNestedInput {
  @TypeGraphQL.Field(_type => [NaturesCreateWithoutIncreasedStatInput], {
    nullable: true
  })
  create?: NaturesCreateWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesCreateOrConnectWithoutIncreasedStatInput], {
    nullable: true
  })
  connectOrCreate?: NaturesCreateOrConnectWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput], {
    nullable: true
  })
  upsert?: NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => NaturesCreateManyIncreasedStatInputEnvelope, {
    nullable: true
  })
  createMany?: NaturesCreateManyIncreasedStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereUniqueInput], {
    nullable: true
  })
  set?: NaturesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NaturesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereUniqueInput], {
    nullable: true
  })
  delete?: NaturesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereUniqueInput], {
    nullable: true
  })
  connect?: NaturesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput], {
    nullable: true
  })
  update?: NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesUpdateManyWithWhereWithoutIncreasedStatInput], {
    nullable: true
  })
  updateMany?: NaturesUpdateManyWithWhereWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NaturesScalarWhereInput[] | undefined;
}
