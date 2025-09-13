import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateManyMetaAilmentInput } from "../inputs/MoveMetaCreateManyMetaAilmentInput";

@TypeGraphQL.InputType("MoveMetaCreateManyMetaAilmentInputEnvelope", {})
export class MoveMetaCreateManyMetaAilmentInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveMetaCreateManyMetaAilmentInput], {
    nullable: false
  })
  data!: MoveMetaCreateManyMetaAilmentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
