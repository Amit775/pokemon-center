import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateManyMetaCategoryInput } from "../inputs/MoveMetaCreateManyMetaCategoryInput";

@TypeGraphQL.InputType("MoveMetaCreateManyMetaCategoryInputEnvelope", {})
export class MoveMetaCreateManyMetaCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveMetaCreateManyMetaCategoryInput], {
    nullable: false
  })
  data!: MoveMetaCreateManyMetaCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
