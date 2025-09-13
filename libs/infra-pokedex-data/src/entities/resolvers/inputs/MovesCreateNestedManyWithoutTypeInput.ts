import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyTypeInputEnvelope } from "../inputs/MovesCreateManyTypeInputEnvelope";
import { MovesCreateOrConnectWithoutTypeInput } from "../inputs/MovesCreateOrConnectWithoutTypeInput";
import { MovesCreateWithoutTypeInput } from "../inputs/MovesCreateWithoutTypeInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedManyWithoutTypeInput", {})
export class MovesCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutTypeInput], {
    nullable: true
  })
  create?: MovesCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;
}
