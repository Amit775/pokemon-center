import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutMetaInput } from "../inputs/MovesUpdateWithoutMetaInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutMetaInput", {})
export class MovesUpdateToOneWithWhereWithoutMetaInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutMetaInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutMetaInput;
}
