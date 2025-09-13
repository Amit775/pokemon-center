import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutSuperContestCombosInput } from "../inputs/MovesUpdateWithoutSuperContestCombosInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutSuperContestCombosInput", {})
export class MovesUpdateToOneWithWhereWithoutSuperContestCombosInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutSuperContestCombosInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutSuperContestCombosInput;
}
