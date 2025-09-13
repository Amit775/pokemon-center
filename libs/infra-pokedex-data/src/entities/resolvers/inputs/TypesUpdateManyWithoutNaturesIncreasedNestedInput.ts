import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutNaturesIncreasedInput } from "../inputs/TypesCreateOrConnectWithoutNaturesIncreasedInput";
import { TypesCreateWithoutNaturesIncreasedInput } from "../inputs/TypesCreateWithoutNaturesIncreasedInput";
import { TypesScalarWhereInput } from "../inputs/TypesScalarWhereInput";
import { TypesUpdateManyWithWhereWithoutNaturesIncreasedInput } from "../inputs/TypesUpdateManyWithWhereWithoutNaturesIncreasedInput";
import { TypesUpdateWithWhereUniqueWithoutNaturesIncreasedInput } from "../inputs/TypesUpdateWithWhereUniqueWithoutNaturesIncreasedInput";
import { TypesUpsertWithWhereUniqueWithoutNaturesIncreasedInput } from "../inputs/TypesUpsertWithWhereUniqueWithoutNaturesIncreasedInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateManyWithoutNaturesIncreasedNestedInput", {})
export class TypesUpdateManyWithoutNaturesIncreasedNestedInput {
  @TypeGraphQL.Field(_type => [TypesCreateWithoutNaturesIncreasedInput], {
    nullable: true
  })
  create?: TypesCreateWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesCreateOrConnectWithoutNaturesIncreasedInput], {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpsertWithWhereUniqueWithoutNaturesIncreasedInput], {
    nullable: true
  })
  upsert?: TypesUpsertWithWhereUniqueWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  set?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  delete?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpdateWithWhereUniqueWithoutNaturesIncreasedInput], {
    nullable: true
  })
  update?: TypesUpdateWithWhereUniqueWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpdateManyWithWhereWithoutNaturesIncreasedInput], {
    nullable: true
  })
  updateMany?: TypesUpdateManyWithWhereWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypesScalarWhereInput[] | undefined;
}
