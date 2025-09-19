import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoryCreateOrConnectWithoutMetaInput } from "../inputs/MoveMetaCategoryCreateOrConnectWithoutMetaInput";
import { MoveMetaCategoryCreateWithoutMetaInput } from "../inputs/MoveMetaCategoryCreateWithoutMetaInput";
import { MoveMetaCategoryUpdateToOneWithWhereWithoutMetaInput } from "../inputs/MoveMetaCategoryUpdateToOneWithWhereWithoutMetaInput";
import { MoveMetaCategoryUpsertWithoutMetaInput } from "../inputs/MoveMetaCategoryUpsertWithoutMetaInput";
import { MoveMetaCategoryWhereUniqueInput } from "../inputs/MoveMetaCategoryWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCategoryUpdateOneRequiredWithoutMetaNestedInput", {})
export class MoveMetaCategoryUpdateOneRequiredWithoutMetaNestedInput {
  @TypeGraphQL.Field(_type => MoveMetaCategoryCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MoveMetaCategoryCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MoveMetaCategoryCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryUpsertWithoutMetaInput, {
    nullable: true
  })
  upsert?: MoveMetaCategoryUpsertWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveMetaCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryUpdateToOneWithWhereWithoutMetaInput, {
    nullable: true
  })
  update?: MoveMetaCategoryUpdateToOneWithWhereWithoutMetaInput | undefined;
}
