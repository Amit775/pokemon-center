import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesCreateOrConnectWithoutMetaInput } from "../inputs/MoveMetaCategoriesCreateOrConnectWithoutMetaInput";
import { MoveMetaCategoriesCreateWithoutMetaInput } from "../inputs/MoveMetaCategoriesCreateWithoutMetaInput";
import { MoveMetaCategoriesUpdateToOneWithWhereWithoutMetaInput } from "../inputs/MoveMetaCategoriesUpdateToOneWithWhereWithoutMetaInput";
import { MoveMetaCategoriesUpsertWithoutMetaInput } from "../inputs/MoveMetaCategoriesUpsertWithoutMetaInput";
import { MoveMetaCategoriesWhereUniqueInput } from "../inputs/MoveMetaCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput", {})
export class MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MoveMetaCategoriesCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MoveMetaCategoriesCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesUpsertWithoutMetaInput, {
    nullable: true
  })
  upsert?: MoveMetaCategoriesUpsertWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveMetaCategoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesUpdateToOneWithWhereWithoutMetaInput, {
    nullable: true
  })
  update?: MoveMetaCategoriesUpdateToOneWithWhereWithoutMetaInput | undefined;
}
