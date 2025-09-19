import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyTypeInputEnvelope } from "../inputs/MoveCreateManyTypeInputEnvelope";
import { MoveCreateOrConnectWithoutTypeInput } from "../inputs/MoveCreateOrConnectWithoutTypeInput";
import { MoveCreateWithoutTypeInput } from "../inputs/MoveCreateWithoutTypeInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedManyWithoutTypeInput", {})
export class MoveCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutTypeInput], {
    nullable: true
  })
  create?: MoveCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;
}
