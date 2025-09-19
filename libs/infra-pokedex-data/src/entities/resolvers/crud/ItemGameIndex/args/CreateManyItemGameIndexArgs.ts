import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexCreateManyInput } from "../../../inputs/ItemGameIndexCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemGameIndexArgs {
  @TypeGraphQL.Field(_type => [ItemGameIndexCreateManyInput], {
    nullable: false
  })
  data!: ItemGameIndexCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
