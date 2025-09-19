import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateManyMetaCategoryInputEnvelope } from "../inputs/MoveMetaCreateManyMetaCategoryInputEnvelope";
import { MoveMetaCreateOrConnectWithoutMetaCategoryInput } from "../inputs/MoveMetaCreateOrConnectWithoutMetaCategoryInput";
import { MoveMetaCreateWithoutMetaCategoryInput } from "../inputs/MoveMetaCreateWithoutMetaCategoryInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCreateNestedManyWithoutMetaCategoryInput", {})
export class MoveMetaCreateNestedManyWithoutMetaCategoryInput {
  @TypeGraphQL.Field(_type => [MoveMetaCreateWithoutMetaCategoryInput], {
    nullable: true
  })
  create?: MoveMetaCreateWithoutMetaCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCreateOrConnectWithoutMetaCategoryInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaCreateOrConnectWithoutMetaCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCreateManyMetaCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaCreateManyMetaCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveMetaWhereUniqueInput[] | undefined;
}
