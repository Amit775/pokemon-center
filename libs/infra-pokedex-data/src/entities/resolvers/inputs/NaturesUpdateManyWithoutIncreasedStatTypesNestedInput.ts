import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateOrConnectWithoutIncreasedStatTypesInput } from "../inputs/NaturesCreateOrConnectWithoutIncreasedStatTypesInput";
import { NaturesCreateWithoutIncreasedStatTypesInput } from "../inputs/NaturesCreateWithoutIncreasedStatTypesInput";
import { NaturesScalarWhereInput } from "../inputs/NaturesScalarWhereInput";
import { NaturesUpdateManyWithWhereWithoutIncreasedStatTypesInput } from "../inputs/NaturesUpdateManyWithWhereWithoutIncreasedStatTypesInput";
import { NaturesUpdateWithWhereUniqueWithoutIncreasedStatTypesInput } from "../inputs/NaturesUpdateWithWhereUniqueWithoutIncreasedStatTypesInput";
import { NaturesUpsertWithWhereUniqueWithoutIncreasedStatTypesInput } from "../inputs/NaturesUpsertWithWhereUniqueWithoutIncreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpdateManyWithoutIncreasedStatTypesNestedInput", {})
export class NaturesUpdateManyWithoutIncreasedStatTypesNestedInput {
  @TypeGraphQL.Field(_type => [NaturesCreateWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  create?: NaturesCreateWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesCreateOrConnectWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  connectOrCreate?: NaturesCreateOrConnectWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesUpsertWithWhereUniqueWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  upsert?: NaturesUpsertWithWhereUniqueWithoutIncreasedStatTypesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [NaturesUpdateWithWhereUniqueWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  update?: NaturesUpdateWithWhereUniqueWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesUpdateManyWithWhereWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  updateMany?: NaturesUpdateManyWithWhereWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NaturesScalarWhereInput[] | undefined;
}
