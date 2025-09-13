import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateOrConnectWithoutDecreasedStatTypesInput } from "../inputs/NaturesCreateOrConnectWithoutDecreasedStatTypesInput";
import { NaturesCreateWithoutDecreasedStatTypesInput } from "../inputs/NaturesCreateWithoutDecreasedStatTypesInput";
import { NaturesScalarWhereInput } from "../inputs/NaturesScalarWhereInput";
import { NaturesUpdateManyWithWhereWithoutDecreasedStatTypesInput } from "../inputs/NaturesUpdateManyWithWhereWithoutDecreasedStatTypesInput";
import { NaturesUpdateWithWhereUniqueWithoutDecreasedStatTypesInput } from "../inputs/NaturesUpdateWithWhereUniqueWithoutDecreasedStatTypesInput";
import { NaturesUpsertWithWhereUniqueWithoutDecreasedStatTypesInput } from "../inputs/NaturesUpsertWithWhereUniqueWithoutDecreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpdateManyWithoutDecreasedStatTypesNestedInput", {})
export class NaturesUpdateManyWithoutDecreasedStatTypesNestedInput {
  @TypeGraphQL.Field(_type => [NaturesCreateWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  create?: NaturesCreateWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesCreateOrConnectWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  connectOrCreate?: NaturesCreateOrConnectWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesUpsertWithWhereUniqueWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  upsert?: NaturesUpsertWithWhereUniqueWithoutDecreasedStatTypesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [NaturesUpdateWithWhereUniqueWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  update?: NaturesUpdateWithWhereUniqueWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesUpdateManyWithWhereWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  updateMany?: NaturesUpdateManyWithWhereWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NaturesScalarWhereInput[] | undefined;
}
