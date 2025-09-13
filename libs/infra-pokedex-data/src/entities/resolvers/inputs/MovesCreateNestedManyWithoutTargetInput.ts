import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyTargetInputEnvelope } from "../inputs/MovesCreateManyTargetInputEnvelope";
import { MovesCreateOrConnectWithoutTargetInput } from "../inputs/MovesCreateOrConnectWithoutTargetInput";
import { MovesCreateWithoutTargetInput } from "../inputs/MovesCreateWithoutTargetInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedManyWithoutTargetInput", {})
export class MovesCreateNestedManyWithoutTargetInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutTargetInput], {
    nullable: true
  })
  create?: MovesCreateWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutTargetInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyTargetInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyTargetInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;
}
