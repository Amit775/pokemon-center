import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateManyDecreasedStatInputEnvelope } from "../inputs/NaturesCreateManyDecreasedStatInputEnvelope";
import { NaturesCreateOrConnectWithoutDecreasedStatInput } from "../inputs/NaturesCreateOrConnectWithoutDecreasedStatInput";
import { NaturesCreateWithoutDecreasedStatInput } from "../inputs/NaturesCreateWithoutDecreasedStatInput";
import { NaturesScalarWhereInput } from "../inputs/NaturesScalarWhereInput";
import { NaturesUpdateManyWithWhereWithoutDecreasedStatInput } from "../inputs/NaturesUpdateManyWithWhereWithoutDecreasedStatInput";
import { NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput } from "../inputs/NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput";
import { NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput } from "../inputs/NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpdateManyWithoutDecreasedStatNestedInput", {})
export class NaturesUpdateManyWithoutDecreasedStatNestedInput {
  @TypeGraphQL.Field(_type => [NaturesCreateWithoutDecreasedStatInput], {
    nullable: true
  })
  create?: NaturesCreateWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesCreateOrConnectWithoutDecreasedStatInput], {
    nullable: true
  })
  connectOrCreate?: NaturesCreateOrConnectWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput], {
    nullable: true
  })
  upsert?: NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => NaturesCreateManyDecreasedStatInputEnvelope, {
    nullable: true
  })
  createMany?: NaturesCreateManyDecreasedStatInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput], {
    nullable: true
  })
  update?: NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesUpdateManyWithWhereWithoutDecreasedStatInput], {
    nullable: true
  })
  updateMany?: NaturesUpdateManyWithWhereWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NaturesScalarWhereInput[] | undefined;
}
