import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateManyDecreasedStatInputEnvelope } from "../inputs/NatureCreateManyDecreasedStatInputEnvelope";
import { NatureCreateOrConnectWithoutDecreasedStatInput } from "../inputs/NatureCreateOrConnectWithoutDecreasedStatInput";
import { NatureCreateWithoutDecreasedStatInput } from "../inputs/NatureCreateWithoutDecreasedStatInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureCreateNestedManyWithoutDecreasedStatInput", {})
export class NatureCreateNestedManyWithoutDecreasedStatInput {
  @TypeGraphQL.Field(_type => [NatureCreateWithoutDecreasedStatInput], {
    nullable: true
  })
  create?: NatureCreateWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureCreateOrConnectWithoutDecreasedStatInput], {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureCreateManyDecreasedStatInputEnvelope, {
    nullable: true
  })
  createMany?: NatureCreateManyDecreasedStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureWhereUniqueInput[] | undefined;
}
