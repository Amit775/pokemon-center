import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateManyIncreasedStatInputEnvelope } from "../inputs/NatureCreateManyIncreasedStatInputEnvelope";
import { NatureCreateOrConnectWithoutIncreasedStatInput } from "../inputs/NatureCreateOrConnectWithoutIncreasedStatInput";
import { NatureCreateWithoutIncreasedStatInput } from "../inputs/NatureCreateWithoutIncreasedStatInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureCreateNestedManyWithoutIncreasedStatInput", {})
export class NatureCreateNestedManyWithoutIncreasedStatInput {
  @TypeGraphQL.Field(_type => [NatureCreateWithoutIncreasedStatInput], {
    nullable: true
  })
  create?: NatureCreateWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureCreateOrConnectWithoutIncreasedStatInput], {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureCreateManyIncreasedStatInputEnvelope, {
    nullable: true
  })
  createMany?: NatureCreateManyIncreasedStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureWhereUniqueInput[] | undefined;
}
