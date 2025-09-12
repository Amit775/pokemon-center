import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutMetaStatChangesInput } from "../inputs/MovesCreateOrConnectWithoutMetaStatChangesInput";
import { MovesCreateWithoutMetaStatChangesInput } from "../inputs/MovesCreateWithoutMetaStatChangesInput";
import { MovesUpdateToOneWithWhereWithoutMetaStatChangesInput } from "../inputs/MovesUpdateToOneWithWhereWithoutMetaStatChangesInput";
import { MovesUpsertWithoutMetaStatChangesInput } from "../inputs/MovesUpsertWithoutMetaStatChangesInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput", {})
export class MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutMetaStatChangesInput, {
    nullable: true
  })
  create?: MovesCreateWithoutMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutMetaStatChangesInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpsertWithoutMetaStatChangesInput, {
    nullable: true
  })
  upsert?: MovesUpsertWithoutMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateToOneWithWhereWithoutMetaStatChangesInput, {
    nullable: true
  })
  update?: MovesUpdateToOneWithWhereWithoutMetaStatChangesInput | undefined;
}
